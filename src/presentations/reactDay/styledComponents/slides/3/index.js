import React from "react";
import { Heading, Slide, List, Appear, Image } from "spectacle";
// Import mapValues from lodash
import mapValues from "lodash/mapValues";
// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

const images = mapValues({
  history: require("../../assets/history.png")
}, v => v.replace('/', ''));

preloader(images);

export default (
  <Slide
    transition={["zoom"]}
    style={{ background: 'linear-gradient(20deg, rgb(219, 112, 147), #daa357)' }}
    notes={(
      <div>
        <p>Στατικες σελιδες απο παλια υπηρχε η αναγκη για styling. Πολλα προβληματα. Ο καθενας εγραφε με τον δικο του τροπο css.</p>
        <p>SASS - Syntactically Awesome Style Sheets Μεγαλωσαν οι αναγκες και ηρθε το SASS  που εβαλε μια λογικη στο stylesheet, καταφερε να σπασει τα αρχεια σε μικροτερα, αλλα τελικα εφερε μεγαλυτερα προβλημαρα παρα να φτιαξει τα προηγουμενα.</p>
      <p>Ως που ηρθε στην ζωη μας το ΒΕΜ -Block Element Modifier μας πηγε σε ενα νεο level εξασφαλιζοντας μας οτι το className ειναι μοναδικο αποφευγοντασς ετσι τυχον συγκρουσεις. Δουλευοντας με το ΒΕΜ ειδαμε καποια αλλα προβληματα οπως επρεπε να διαλεγουμε classnames, markup μεγαλωνε.</p>
      <p>Το css-module εγινε πολυ διμοφυλης με το react και πολλα project χρησιμοποιουν αυτην την βιβλιοθηκη. δεν επιλύουν τα βασικά προβλήματα του CSS, ειναι έναν έξυπνο τρόπο αυτοματοποίησης του BEM, ώστε να μην σκεφτείτε ποτέ να επιλέγετε ξανά classNames. Αλλα δεν διορθωνει αρχιτεκτονική στυλ του css. </p>
        </div>
    )}
    >
    <Heading size={3} style={{ color: 'white' }}>
      Let's talk about styling!!!
    </Heading>
    <List>
      <Appear><Image src={images.history} width="100%"/></Appear>
    </List>
  </Slide>
);
