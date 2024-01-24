import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { createUrl } from '../Filter/Search/Search';
import { Box, Flex } from '../../FlexBox/FlexBox';
import { Text } from '../../Typography/Typography';

interface IVariantSelector {
  options: Option[]
  variants: Combination[]
}

type Option = {
  id: string;
  name: string;
  values: number[] | string[];
};

type Combination = {
  id: string;
  availableForSale: boolean;
  [key: string]: string | boolean;
};

export const VariantSelector: React.FC<IVariantSelector> = ({
  options,
  variants = []
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const hasNoOptionsOrJustOneOption =
    !options.length || (options.length === 1 && options[0]?.values.length === 1);

  if (hasNoOptionsOrJustOneOption) {
    return null;
  }
 
  const combinations: Combination[] = variants.map((variant) => ({
    id: variant.id,
    availableForSale: variant.availableForSale,
    // Adds key / value pairs for each variant (ie. "color": "Black" and "size": 'M").
    ...variant.selectedOptions.reduce(
      (accumulator, option) => ({ ...accumulator, [option.name.toLowerCase()]: option.value }),
      {}
    )
  }));

  return options.map((option) => (
    <Box key={option.id}>
      <Text size={'small'}>{option.name}</Text>
      <Flex>
        {option.values.map((value) => {
          const optionNameLowerCase = option.name.toLowerCase();

          // Base option params on current params so we can preserve any other param state in the url.
          const optionSearchParams = new URLSearchParams(searchParams.toString());
          // Update the option params using the current option to reflect how the url *would* change,
          // if the option was clicked.
          console.log('value', value)
          optionSearchParams.set(optionNameLowerCase, value);
          const optionUrl = createUrl(pathname, optionSearchParams);

          // In order to determine if an option is available for sale, we need to:
          //
          // 1. Filter out all other param state
          // 2. Filter out invalid options
          // 3. Check if the option combination is available for sale
          //
          // This is the "magic" that will cross check possible variant combinations and preemptively
          // disable combinations that are not available. For example, if the color gray is only available in size medium,
          // then all other sizes should be disabled.
          const filtered = Array.from(optionSearchParams.entries()).filter(([key, value]) =>
            options.find(
              (option) => option.name.toLowerCase() === key && option.values.includes(value)
            )
          );
          console.log('filtered', filtered)
          const isAvailableForSale = combinations.find((combination) =>
            filtered.every(
              ([key, value]) => combination[key] === value && combination.availableForSale
            )
          );

          // The option is active if it's in the url params.
          const isActive = searchParams.get(optionNameLowerCase) === value;

          return (
            <Box
              as='button'
              key={value}
              aria-disabled={!isAvailableForSale}
              disabled={!isAvailableForSale}
              onClick={() => {
                router.replace(optionUrl, { scroll: false });
              }}
              title={`${option.name} ${value}${!isAvailableForSale ? ' (Out of Stock)' : ''}`}
             
            >
              {value}
            </Box>
          );
        })}
      </Flex>
    </Box>
  ));
}