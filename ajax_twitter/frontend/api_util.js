const APIUtil = {
  followUser: id => {
    return $.ajax({
      method: "POST",
      url: `/users/${id}/follow/`,
      dataType: "JSON"
    });
  },

  unfollowUser: id => {
    return $.ajax({
      method: "DELETE",
      url: `/users/${id}/follow/`,
      dataType: "JSON"
      // success: () => {
      //   this.initialFollowState = this.initialFollowState === false;
      //   this.render();
      // }
    });
  }
};

module.exports = APIUtil;