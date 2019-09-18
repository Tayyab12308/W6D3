const APIUtil = require('./api_util.js')
class FollowToggle {
  constructor($el) {
    this.$el = $($el);
    this.userId = $el.data("user-id");
    this.initialFollowState = $el.data("initial-follow-state");
    this.render(this.$el);
    this.$el.on("click", (e) => {
      e.preventDefault();
      // const button = e.currentTarget;
      this.handleClick();
    });
  }
  
  render() {
      if (this.initialFollowState === false) {
        this.$el.text('Follow!');
      } else {
        this.$el.text('Unfollow!');
      }
  }


  handleClick() { 
    const success = () => {
        this.initialFollowState = this.initialFollowState === false;
        this.render();
    }
    if (this.initialFollowState === false) {
      APIUtil.followUser(this.userId).then(success);
    } else {
      APIUtil.unfollowUser(this.userId).then(success);
    }     
  }
}
module.exports = FollowToggle;


      // if (this.initialFollowState === false) {
          //   this.initialFollowState = true;
          // } else {
          //   this.initialFollowState = false;
          // }