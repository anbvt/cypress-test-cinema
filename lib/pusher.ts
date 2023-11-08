import Pusher from 'pusher-js';
const pusher = new Pusher('3873c56e91f1f59594b7', {
    cluster: 'ap1'
});
export default pusher;

