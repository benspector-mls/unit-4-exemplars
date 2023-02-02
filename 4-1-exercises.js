// Question 1
function makeFriendList(){
  return {
    _friends: [], // Use _friends to indicate friends is private
    addFriend(name) {
      this._friends.push(name);
      return `${name} successfully added.`;
    },
    removeFriend(name) {
      const indexOfFriend = this._friends.indexOf(name); // Find the index of the provided name
      if (indexOfFriend >= 0) { // If it exists...
        this._friends.splice(indexOfFriend, 1); // remove it using splice
        return `${name} successfully removed.`;
      } else {
        return `${name} not found.`
      }
    },
    displayFriends() {
      const len = this._friends.length;
      if (len === 0) {
        return "You have not added any friends."
      }
      else if (len === 1) {
        return this._friends[0] + " is your friend."
      } 
      else if (len === 2) {
        return `${this._friends[0]} and ${this._friends[1]} are your friends.`
      }
      else {
        let friendsCopy = this._friends.slice(); // Make a copy to avoid modifiying the actual friends list because...
        let lastFriend = friendsCopy.pop(); // We pop the last value and save it. friendCopy now has all but the last value.
        return `${friendsCopy.join(", ")}, and ${lastFriend} are your friends.`; // All but the last friend are joined in a comma-separated string and we add in the last friend
      }
    },
  }
}

module.exports = {
  makeFriendList
};
