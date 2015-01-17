if (Meteor.isClient) {
  Accounts.ui.config({
    requestPermissions: {
      facebook: ['email', 'public_profile', 'user_friends']
    },
    passwordSignupFields: 'USERNAME_AND_OPTIONAL_EMAIL'
  });
}