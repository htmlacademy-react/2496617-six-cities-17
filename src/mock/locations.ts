// *======================== locations ========================* //

type LocationType = {
  id: number;
  name: string;
  isSelected: boolean;
};


const LOCATIONS: LocationType[] = [
  {
    id: 1,
    name: 'Paris',
    isSelected: false,
  },
  {
    id: 2,
    name: 'Cologne',
    isSelected: false,
  },
  {
    id: 3,
    name: 'Brussels',
    isSelected: false,
  },
  {
    id: 4,
    name: 'Amsterdam',
    isSelected: true,
  },
  {
    id: 5,
    name: 'Hamburg',
    isSelected: false,
  },
  {
    id: 6,
    name: 'Dusseldorf',
    isSelected: false,
  },
];

export { LOCATIONS };
