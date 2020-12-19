interface IProps {
  name: string;
  openAt: string;
  closesSoon: boolean;
}

export default function RestaurantCard(props: IProps) {
  return (<div className="w-full rounded-lg shadow-md p-6">
    <h2 className="font-bold mb-4">{props.name}</h2>
    <div className="flex mb-4">
      <span className="font-medium">Opens At:&nbsp;</span>
      <span>{props.openAt}</span>
    </div>
    { props.closesSoon && <p className="text-red-700">Closes Soon</p>}
  </div>);
}