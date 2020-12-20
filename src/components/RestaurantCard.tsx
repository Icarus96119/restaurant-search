interface IProps {
  name: string;
  openAt: string;
  closeAt: string
  closesSoon: boolean;
}

export default function RestaurantCard(props: IProps) {
  return (<div className="w-full h-full justify-center rounded-lg shadow-md p-6 h-195">
    <h2 className="font-bold truncate mb-4">{props.name}</h2>
    <div className="flex mb-4">
      <span className="font-medium">Opens At:&nbsp;</span>
      <span>{props.openAt}</span>
    </div>
    <div className="flex mb">
      <span className="font-medium">Close At:&nbsp;</span>
      <span>{props.closeAt}</span>
    </div>
    { props.closesSoon && <p className="mt-4 text-red-700">Closes Soon</p>}
  </div>);
}