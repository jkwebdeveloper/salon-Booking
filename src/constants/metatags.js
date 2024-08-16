const siteName = ' | Salon Details';

export const MetaTags = {
     home: ({ title, description, ...rest }) => {
          return {
               title: title + siteName,
               description: description,
               ...rest
          }
     },
     salonDetails: ({ title, description, ...rest }) => {
          return {
               title: title + siteName,
               description: description,
               ...rest
          }
     },
};