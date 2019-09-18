const FollowToggle = require("./follow_toggle");

$(() => {
  $(".follow-toggle").each((i, ele) => {
    // const FollowToggle = 
    new FollowToggle($(ele));
  });
});