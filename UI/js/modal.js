/* Handling modal form for posting advert*/
const postAdvert = document.getElementById('postAdvert');
const updateAdvert = document.getElementById('updateAdvert');
const flagAdvert = document.getElementById('flagAdvert');

const postAd = () => postAdvert.style.display='block';

const updateAd = () => updateAdvert.style.display='block';

const flagAd = () => flagAdvert.style.display='block';

const closeModal = () => {
	if(postAdvert.style.display === 'block') { postAdvert.style.display = 'none'; }
	if(updateAdvert.style.display === 'block') { updateAdvert.style.display = 'none'; }
	if(flagAdvert.style.display === 'block') { flagAdvert.style.display = 'none'; }
}
