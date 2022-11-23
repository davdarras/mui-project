import { Grid } from "@mui/material";
import { Block } from "modules/core/presentation/components";
import { memo } from "react";
import { ContactForm } from "modules/core/components/ContactForm";

export const FormPage = memo(() => {
  return (
    <Grid component="main" container justifyContent="center" spacing={3}>
      <Grid item xs={12}>
        <Block>
          <ContactForm />
        </Block>
      </Grid>
    </Grid>
  );
});

FormPage.displayName = "FormPage";
