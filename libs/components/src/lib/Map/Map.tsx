import React from "react";
import { Box } from "../FlexBox/FlexBox";

const Map: React.FC<any> = ({
  mapCode 
}) => {
    const map =       <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19894.319929000118!2d-0.030771041315261382!3d51.443650570492316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760217687bbabf%3A0xaa75a3ab26a3bb67!2sCatford%2C%20London!5e0!3m2!1sen!2suk!4v1691190442392!5m2!1sen!2suk" width="100%" height="450" style={{border:"0"}}  loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

  return (
    <Box width={'100%'} height={'100%'}>
        {map}
    </Box>
  );
};

export default Map;