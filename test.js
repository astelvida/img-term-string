import test from 'ava';
import imgTermString from './index.js';

test('should return the image string from local file with no errors', async t => {
    try {
        const imgString = await imgTermString({ src: 'ohno.jpg', width: '300px' })
        t.true(typeof imgString === 'string');
    } catch (err) {
        t.fail(err)
    }
});


test('should return the image string from url with no errors', async t => {
    try {
        const imgString = await imgTermString({ src: 'https://media.giphy.com/media/l0MYKZKh3R6LdBvEc/200.gif' })
        t.true(typeof imgString === 'string');
    } catch (err) {
        t.fail(err)
    }
});
