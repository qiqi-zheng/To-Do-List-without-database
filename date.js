//jshint esversion:6

exports.getDate = function() {

  const options = {weekday: 'long', day: 'numeric', month: 'long'};
  const today = new Date();
  let day = today.toLocaleDateString("en-US", options);

  return day;
};
