function cmsSelector(arr, str) {
    return arr.filter(item => item.toLowerCase().includes(str.toLowerCase()));
}

console.log(cmsSelector(["WordPress", "Joomla", "Drupal"], "o"));