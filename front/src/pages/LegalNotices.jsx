// Page GVU/CGU (accessible via lien dans le footer)

import { useContentSections } from '../hooks/useContentSections';
import parse from "html-react-parser";

export default function LegalNotices() {
    const contentSections = useContentSections();
    const contentSectionsFiltered = contentSections.getSectionByKey('legal-notices');

    let pageContent;
    if (contentSections.loading) {
        // introContent = <p>Chargement...</p>;
    } else if (contentSections.error) {
        pageContent = <p>Erreur : Une erreur est survenue lors de la récupération des données.</p>;
    } else if (contentSectionsFiltered) {
        pageContent = (
            <section className="mt-16">
                <h2> {contentSectionsFiltered.title} </h2>
                <div> {parse(contentSectionsFiltered.content)} </div>
            </section>
        );
    } else {
        pageContent = <p>Aucune section "terms-and-conditions" trouvée.</p>;
    }
    console.log(pageContent);

    return (
        <>{pageContent}</>
    )
}
