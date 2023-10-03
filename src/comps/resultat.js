
export default function Resultat(props) {
  // Check if props.selectedItem is null or not
  if (props.selectedItem) {
    const usd = props.amount * props.selectedItem.argent;
    return (
      <div className='p-5'>
        <h3 className="text-uppercase display-6 text-center text-white p-2">
          {usd.toFixed(2)} {props.selectedItem.state.substring(3)  }
        </h3>
      </div>
    );
  
  } else {
    //Handle the case where props.selectedItem is null (show an error message)
    return (
      <div className='p-5'>
        <p className="text-center text-white">Select an item from the drop-down list</p>
      </div>
    );
  }
}
