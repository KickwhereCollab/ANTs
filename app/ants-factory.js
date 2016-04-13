app.factory('antsFactory', function() {
  var factory = {};
  factory.antsTypes = [
    {
      name: '"All or Nothing" Thinking',
      color: 'black',
      description: 'This is when you think everything is all good or all bad. It is the same as black or white thinking.'
    },
    {
      name: '"Always" Thinking',
      color: 'black',
      description: 'This is when you think in words that over generalize, such as always, never, no one, everyone, every time, everything.'
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
    {
      name: 'Labeling',
      color: 'black',
      description: 'When you attach a negative label to yourself or someone else, you lump them in your mind with everyone you precieve with that label. You become unable to deal with them in a reasonable way.'
    },
    {
      name: 'Fortune Telling',
      color: 'red',
      description: 'This is where you predict the worse possible outcome to a situation with little or no evidence for it.'
    },
    {
      name: 'Mind Reading',
      color: 'red',
      description: 'Mind reading is when you believe that you know what another person is thinking even though they haven\'t told you.'
    },
    {
      name: 'Blame',
      color: 'red',
      description: 'Blaming someone else for your own problems. When you blame something or someone else for the problems in your life, you become a victum of circumstances and you cannot do anything to change your situation.'
    }
  ];

  return factory;
});
