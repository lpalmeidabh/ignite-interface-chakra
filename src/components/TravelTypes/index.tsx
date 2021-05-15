import { Grid, GridItem, SimpleGrid } from "@chakra-ui/react";
import { TypeItem } from "./TypeItem";

export function TravelTypes() {
  return (
    <SimpleGrid
    columns={[2, null, 3, 3, 5]}
    spacingX={[12, 28]}
    // spacingY={5}
    mt={[10, 32]} 
    p={[0, 30]}
    alignItems={["left", "center"]}
    mx= "auto"

    justifyContent="center"
    
    
    // minChildWidth="85px" 
    
    >
        
      <TypeItem image="nightlife" title="vida noturna" />
      <TypeItem image="beach" title="praia" />
      <TypeItem image="modern" title="moderno" />
      <TypeItem image="classic" title="clássico" />
      <TypeItem image="more" title="e mais..." />
    </SimpleGrid>
  );
};