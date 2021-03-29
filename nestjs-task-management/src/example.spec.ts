class FriendsList {
  friends = [];

  addFriend(name) {
    this.friends.push(name);
    this.announceFriendship(name);
  }

  announceFriendship(name) {
    global.console.log(`${name} is now a friend`);
  }

  removeFriend(name) {
    const idx = this.friends.indexOf(name);

    if (idx === -1) {
      throw new Error('Friend not found!');
    }

    this.friends.splice(idx, 1);
  }
}

describe('FriendsList', () => {
  let friendsList: FriendsList;
  const name = 'Fabio';

  beforeEach(() => {
    friendsList = new FriendsList();
  });

  it('initializes friends list', () => {
    expect(friendsList.friends.length).toEqual(0);
    expect(friendsList).toBeInstanceOf(FriendsList);
  });

  it('adds a friend to the list', () => {
    friendsList.addFriend(name);

    expect(friendsList.friends.length).toEqual(1);
  });

  it('announces friendship', () => {
    friendsList.announceFriendship = jest.fn();

    expect(friendsList.announceFriendship).not.toHaveBeenCalled();

    friendsList.addFriend(name);

    expect(friendsList.announceFriendship).toHaveBeenCalledWith(name);
  });

  describe('removeFriend', () => {
    it('removes a friend from the list', () => {
      friendsList.addFriend(name);

      expect(friendsList.friends[0]).toEqual(name);

      friendsList.removeFriend(name);

      expect(friendsList.friends[0]).toBeUndefined();
    });

    it('throws an error as friend does not exist', () => {
      expect(() => friendsList.removeFriend(name)).toThrow();
    });
  });
});
