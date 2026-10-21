function detectBrowser() {
  const ua = navigator.userAgent;

  if (ua.includes('Firefox')) {
    return 'Firefox, ' + ua.split('Firefox/')[1].split('.')[0];
  } else if (ua.includes('Chrome') && !ua.includes('Edg')) {
    return 'Chrome, ' + ua.split('Chrome/')[1].split('.')[0];
  } else if (ua.includes('Safari') && !ua.includes('Chrome')) {
    return 'Safari, ' + ua.split('Version/')[1].split('.')[0];
  } else if (ua.includes('Edg')) {
    return 'Microsoft Edge, ' + ua.split('Edg/')[1].split('.')[0];
  } else if (ua.includes('Opera') || ua.includes('OPR')) {
    return 'Opera, ' + ua.split('OPR/')[1].split('.')[0];
  } else if (ua.includes('MSIE')) {
    return 'Internet Explorer, ' + ua.split('MSIE ')[1].split('.')[0];
  } else if (ua.includes('Trident')) {
    return 'Internet Explorer, ' + ua.split('rv:')[1].split('.')[0];
  } else {
    return 'Unknown browser';
  }
}

function detectOs() {
  const ua = navigator.userAgent;

  if (ua.includes('Windows NT')) {
    return 'Windows';
  } else if (ua.includes('iPhone') || ua.includes('iPad')) {
    return 'iOS';
  } else if (ua.includes('Android')) {
    return 'Android';
  } else if (ua.includes('Mac OS X')) {
    return 'macOs';
  } else if (ua.includes('Linux')) {
    return 'Linux';
  } else {
    return 'Unknown OS';
  }
}

document.querySelector('#target').innerHTML +=
  '<h2> Browser name and version: </h2>';
document.querySelector('#target').innerHTML += '<p>' + detectBrowser() + '</p>';

document.querySelector('#target').innerHTML +=
  '<h2> Operating system name: </h2>';
document.querySelector('#target').innerHTML += '<p>' + detectOs() + '</p>';

document.querySelector('#target').innerHTML +=
  '<h2> Screen width and height </h2>';
document.querySelector('#target').innerHTML +=
  '<p> Width: ' + screen.width + '. Height: ' + screen.height + '</p>';

document.querySelector('#target').innerHTML +=
  '<h2> Available screen space for browser: </h2>';

document.querySelector('#target').innerHTML +=
  '<p> Width: ' +
  screen.availWidth +
  '. Height: ' +
  screen.availHeight +
  '</p>';

const d = new Date();

const options = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};

document.querySelector('#target').innerHTML += '<h2> Current date: </h2>';

document.querySelector('#target').innerHTML +=
  '<p>' + d.toLocaleDateString('fi-FI', options) + '</p>';

document.querySelector('#target').innerHTML += '<h2> Current time: </h2>';

const timeOptions = {
  hour: '2-digit',
  minute: '2-digit',
};

document.querySelector('#target').innerHTML +=
  '<p>' + d.toLocaleTimeString('fi-FI', timeOptions) + '</p>';
