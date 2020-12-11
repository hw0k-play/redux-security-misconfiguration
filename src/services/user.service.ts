interface UserItem extends User {
  password: string;
}

const userTable: UserItem[] = [
  {
    id: 'hw0k',
    password: '1234',
    name: '남현욱',
    age: 20,
    isAdmin: false,
  },
  {
    id: 'admin',
    password: '12345',
    name: '어드민',
    age: 1,
    isAdmin: true,
  },
];

export const login = (id: string, password: string) => {
  const target = userTable.find(user =>
    (user.id === id) && (user.password === password)
  );

  if (target) {
    const { id, name, age, isAdmin } = target;
    return Promise.resolve({ id, name, age, isAdmin } as User);
  } else {
    return Promise.reject('login failed');
  }
};
