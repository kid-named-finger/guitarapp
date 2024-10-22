function Reviews() {
    return (
        <>
            <form class="container mb-3" style={{height: '585px',overflow: 'auto'}}>
                <h3>My Reviews</h3>
                <div>
                    <div className='border border-black mb-3'>
                        <div class="row">
                            <div class="col-sm-9">
                                <div class="well">
                                    <ul className='px-1'>
                                        <li>User:</li>
                                        <li>Date created: 4hrs ago</li>
                                        <li>Product Reviewing: </li>
                                        <li>Review:</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-sm-3 d-flex flex-column">
                                <div class="mt-auto ms-auto pe-0">
                                    <button class="btn btn-primary me-1 mb-1">See profile</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}

export default Reviews;
