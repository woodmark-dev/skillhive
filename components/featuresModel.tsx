export default function FeatureModal({
  title,
  fullDetail,
  id,
}: {
  title: string;
  fullDetail: string;
  id: number;
}) {
  return (
    <div>
      <input type="checkbox" id={`my-modal-${id}`} className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor={`my-modal-${id}`}
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold text-blue-800">{title}</h3>
          <p className="py-4">{fullDetail}</p>
        </div>
      </div>
    </div>
  );
}
