const Browser = () => {
    return (
        <div>
            <h1>Test Text</h1>
            <table className="ContentBrowser">
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Creator</th>
                    <th>Link</th>
                    <th>Description</th>
                    <th>Tags</th>
                    <th>NSFW?</th>
                </tr>
                <tr>
                    <td>EX</td>
                    <td>Example Work</td>
                    <td>Developer</td>
                    <td><a href="https://example.com"  referrerPolicy="no-referrer" target="_blank">https://example.com</a></td>
                    <td>Example entry for testing how this table displays</td>
                    <td></td>
                    <td>No</td>
                </tr>
            </table>
        </div>
    );
};
export default Browser;