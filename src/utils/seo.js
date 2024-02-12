import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router';

export default function SEO ({title, description, keywords, name, ogType, twType, image, imageWidth, noindex}) {

    const location = "https://www.kingjob.pro" + useLocation().pathname;

    return (
        <Helmet>

            { /* Standard metadata tags */ }

            {title && <title>{title}</title>}
            {description && <meta name='description' content={description} />}
            {/* {keywords && <meta name="keywords" content={keywords} />} */}
            { /* End standard metadata tags */ }

            { /* Facebook tags */ }

            {ogType && <meta property="og:type" content={ogType} />}
            {title && <meta property="og:title" content={title} />}
            {description && <meta property="og:description" content={description} />}
            {location && <meta property="og:url" content={location} />}
            {image && <meta property="og:image" content={"https://www.kingjob.pro" + image} />}
            <meta property="og:image:width" content={imageWidth ? imageWidth : 300} />
            <meta property="og:site_name" content="King Job" />
            { /* End Facebook tags */ }


            { /* Twitter tags */ }

            {name && <meta name="twitter:creator" content={name} />}
            {twType && <meta name="twitter:card" content={twType} />}
            {title && <meta name="twitter:title" content={title} />}
            {description && <meta name="twitter:description" content={description} />}
            {image && <meta name='twitter:image' content={"https://www.kingjob.pro" + image} />}
            {location && <meta name="twitter:url" content={location} />}
            { /* End Twitter tags */ }

            {location && <link rel="canonical" href={location} />}

            {/* noindex */}
            {noindex && <meta name="robots" content="noindex" /> }
            
        </Helmet>
    )

}