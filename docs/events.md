---
id: events
title: Events
---
Event management functions
## createEventManager

Create a event managment object

 - `events {object}` : Where all events are registred
 - `register {function}(key {string}, callback {function})` : Register a event
 - `emmit {function}(key {string}, args {!any})` : Call all registred function with the key, `args` are opcional

```
const evts = _.createEventManager();

evts.register('user_registred', username => {
    alert(`Thank you, ${username}`);
});

evts.emmit('user_registred', 'Alex');
// alerts 'Thank you, Alex'

```

