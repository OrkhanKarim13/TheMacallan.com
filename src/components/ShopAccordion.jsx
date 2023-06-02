import React from "react";

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

import "react-accessible-accordion/dist/fancy-example.css";

function ShopAccordion() {
  return (
    <Accordion>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>DESCRIPTION</AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>
            The Macallan Red Collection Coasters are crafted in oak, lined with
            the finest red leather and debossed with The Macallan logo. The set
            of six is housed within a unique, oak-finished stand.
          </p>
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>
            DELIVERY INFORMATION
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>
            DELIVERY DESTINATIONS We can send The Macallan whisky to these
            international destinations listed below. Shipping costs are based on
            the destination and basket contents and can be viewed at the point
            of purchase within your shopping basket. Belgium, Bulgaria, Czech
            Republic, Denmark, Germany, Hong Kong S.A.R, Ireland, Latvia,
            Lithuania, Luxembourg, Mexico, Netherlands, Norway, Poland,
            Portugal, Singapore, Slovenia, Switzerland, the UK and the Channel
            Islands For deliveries to Spain, please view the Spain Delivery
            Information page. We can send The Macallan merchandise to all of the
            above locations as well as those listed below: Australia, Austria,
            Brazil, Canada, Croatia, France, Greece, Hong Kong S.A.R., Iceland,
            India, Israel, Italy, Hungary, Japan, South Korea, Malaysia, New
            Zealand, Poland, Singapore, Slovakia, South Africa, Sweden,
            Thailand, Turkey, United Arab Emirates, United States. DELIVERY &
            TAXES The price includes duty and Sales Tax, but does not include
            delivery. Once we know the delivery address, we calculate any
            relevant taxes for your delivering destination at checkout, and give
            you a final price for delivery to your door. The price displayed
            above is subject to change based on the relevant taxes for your
            delivering country.
          </p>
        </AccordionItemPanel>
      </AccordionItem>
    </Accordion>
  );
}

export default ShopAccordion;
