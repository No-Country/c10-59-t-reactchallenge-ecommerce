import { Ring } from '@uiball/loaders'

const Loading = () => {
  return (
    <div className="loader-wrapper">
      <Ring 
        size={60}
        lineWeight={5}
        speed={2} 
        color="black" 
        center={true}
      />
    </div>
  )
}

export default Loading;