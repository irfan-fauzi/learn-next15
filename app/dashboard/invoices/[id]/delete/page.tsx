
const DeletePage = async({params} : {params: Promise<{id: string}>}) => {
  const { id } = await params;
  return (
    <div>DeletePage { id}</div>
  );
};

export default DeletePage;
