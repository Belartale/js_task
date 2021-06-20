// вспомогательная сущьность позволяет лучше структуризировать ваш код
// если есть однотипные элементы
enum Membership {
  Simple,
  Standard,
  Premium,
}

const membership = Membership.Standard;
console.log(membership); // 1

const membershipReverse = Membership[2];

console.log(membershipReverse); // Premium

// в енумы мы можем задавать более внятные значенния

enum SocialMedia {
  VK = "VK",
  FACEBOOK = "FACEBOOK",
  INSTAGRAM = "INSTAGRAM",
}

const social = SocialMedia.INSTAGRAM;
console.log(social); // INSTAGRAM
