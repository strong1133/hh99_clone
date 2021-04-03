import React from "react";
import { Grid, Text, Button } from "../elements";


const Header = (props) => {
    return (
        <React.Fragment>
      <Grid padding="12px" is_flex>
        <Grid is_flex  >
          <Text bold size="21pt">Velog</Text>
          </Grid>
        </Grid>
    </React.Fragment>


    )
}
export default Header;
