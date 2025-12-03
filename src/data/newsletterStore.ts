const subscribers: string[] = [];

export function addSubscriber(email: string) {
  if (!subscribers.includes(email)) {
    subscribers.push(email);
  }
  return subscribers;
}

export function getSubscribers() {
  return subscribers;
}
