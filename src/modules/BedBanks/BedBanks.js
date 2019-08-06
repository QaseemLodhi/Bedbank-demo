import React from "react";
import { withTheme } from "../../static/themes/themes";

const BedBanks = ({ theme }) => {
  return <div style={{ color: theme.primaryColor }}>Hello</div>;
};

export default withTheme(BedBanks);
