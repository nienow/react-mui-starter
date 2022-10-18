import Layout from "../components/Layout";
import {Accordion, AccordionDetails, AccordionSummary} from "@mui/material";
import {ExpandMore} from "@mui/icons-material";

const AboutPage = () => (
  <Layout>
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMore/>}>One</AccordionSummary>
      <AccordionDetails>This is section one</AccordionDetails>
    </Accordion>
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMore/>}>Two</AccordionSummary>
      <AccordionDetails>This is section two</AccordionDetails>
    </Accordion>
  </Layout>
)

export default AboutPage
