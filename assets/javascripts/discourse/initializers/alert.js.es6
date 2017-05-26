import { withPluginApi } from 'discourse/lib/plugin-api';
import RawHtml from 'discourse/widgets/raw-html';

//reply_to_post_number post-contents:after-cooked   post-menu topic-meta `

function attachSignature(api) {
  api.includePostAttributes('reply_to_post_number');

  api.decorateWidget('post-contents:before', dec => {

 const attrs = dec.attrs;
    if (Ember.isEmpty(attrs.reply_to_post_number)) { return; }

  //  const currentUser = api.getCurrentUser();
     
    
  //  if (currentUser) {
   return new RawHtml({html: `<div class='comm'></div> `});
   
   // }
  
  });
       

  }
  
export default {
  name: 'alert',
  initialize(container) {
      withPluginApi('0.1', attachSignature);
             }
};
