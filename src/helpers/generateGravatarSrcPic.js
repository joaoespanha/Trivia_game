import md5 from 'crypto-js/md5';

export default function generateGravatarSrcPic(email) {
  const hash = md5(email).toString();

  const END_POINT = `https://www.gravatar.com/avatar/${hash}`;
  return END_POINT;
}
