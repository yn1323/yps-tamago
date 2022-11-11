export const standard = (/* vars, { ctx, req } */) => ({
  findUser: {
    user: {
      id: '8385f8f6-a7f0-4bea-9642-00d9762d552f',
      userId: '05ed64bd-5ce5-42c8-ba1c-8b357da0ce10',
      userName: 'Yosuke Natani',
      avatar:
        'https://lh3.googleusercontent.com/a/ALm5wu2OowtEuP13x5LIUujbyEVPhZMyntV8y7ucJPthpA=s96-c',
      role: 'admin',
      email: 'yn1323@gmail.com',
      isDeleted: false,
      createdAt: '2022-10-28T14:26:05.091Z',
    },
    belongs: [
      {
        shop: {
          id: 'be1b666d-0eec-4b68-a745-f8d4c1ced0eb',
          shopName: 'dsadsa',
          openTime: '12:00',
          closeTime: '16:30',
          timeUnit: 30,
          submitFrequency: '2w',
          avatar: '',
          useTimeCard: false,
        },
        organization: {
          id: 'a2468f52-9a1c-4a36-ad63-cfa4d7650f0d',
          organizationName: 'dsadsaグループ',
        },
      },
    ],
  },
})
