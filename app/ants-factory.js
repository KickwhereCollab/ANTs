app.factory('antsFactory', function() {
  var factory = {};
  factory.antsTypes = [
    {
      name: 'All or Nothing',
      color: 'black',
      description: 'This is when you think everything is all good or all bad. It is the same as black or white thinking.'
    },
    {
      name: 'Always or Never Thinking',
      color: 'black',
      description: 'This is when you think in words that over generalize, such as always, never, no one, everyone every time, everything.'
    },
    {
      name: 'Focus on the Negative',
      color: 'black',
      description: 'This is when your thoughts only see the bad in a situation and ignore any of the good parts.'
    },
    {
      name: 'Thinking with Your Feelings',
      color: 'black',
      description: 'This occurs whenyou believe your negative feelings without ever questioning them. Feelings are very complex, and , often based on powerful memories from the past. Feelings sometimes lie to you. Look for evidence behind the feelings.'
    },
    {
      name: 'Guilt Beating',
      color: 'black',
      description: 'Guilt is not a helpful emotion, it even affects our deep limbic system. Guilt beating happens when you think with words like "should", "must", "ought to". Because of human nature, whenever we think that we "must" do something, we don\'t want to do it, no matter what it is.',
      solution: 'Replace "guilt beatings" with phrases like "I want to do this...", "It fits my goals to do that...", "It is in my best interest to do this...", "It would be helpful to...".'
    },
    
  ];

  return factory;
});
