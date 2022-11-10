import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { memo } from "react";

export type FooterProps = {
  className: string;
};
export const Footer = memo((props: FooterProps) => {
  const year = new Date().getFullYear();
  const { className } = props;

  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      className={className}
    >
      Copyright ©{" "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {year}.
    </Typography>
  );
});

Footer.displayName = "Footer";
