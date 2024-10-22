function Settings() {
    return (
        <>
            <form class="container mb-3" style={{height: '585px',overflow: 'auto'}}>
                <h3>Settings</h3>
                <div>
                    <div className='border border-black mb-3'>
                        <div class="row">
                            <div class="col-sm-9">
                                <div class="well">
                                    <ul className='px-1'>
                                        <li>Song:</li>
                                        <li>Artist: </li>
                                        <li>Rating:</li>
                                        <li>Hits:</li>
                                        <li>Difficulty: </li>
                                        <li>Key:</li>
                                        <li>Tuning:</li>
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

export default Settings;