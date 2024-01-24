const mapFrom = (content) => {
  const { title, tiles, buttonLabel, buttonLink } = content.fields;
  const tileGroupProps = {
    title: title,
    tiles: tiles.map((tile) => ({
      title: tile.fields.title,
      image: {
        src: tile.fields.image.fields.file.url,
        alt: tile.fields.title,
      },
      hoverText: tile.fields.hoverText,
    })),
    cta: {
        url: buttonLink, 
        label: buttonLabel,
        variant: 'secondary'
    }
  };
  return tileGroupProps;
};

export default mapFrom;
