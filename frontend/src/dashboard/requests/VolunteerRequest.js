export default function requestVolunteer() {
  return(
    <>
    <h2>Please find the form below to make a volunteer request</h2>
    <form>
      <label for="cityvol">Enter Your city</label>
      <input type="text" id="cityvol"/><br></br>
      <label for="cityvol">Enter Your Source </label>
      <input type="text" id="cityvol"/>
      <label for="cityvol">Enter Your Destination</label>
      <input type="text" id="cityvol"/><br/><br/>
      <textarea placeholder="Enter your message"/>
      <label for="scheduledate">Enter Your ScheduledDate and time </label>
      <input type="datetime-local" id="scheduledate"/>
      
      {/*Add suitable options */}
      <select>
        <option>Physical Assistance</option>
        <option>Communication and Advocacy</option>
        <option>Luggage Handling</option>
        <option>Assistance with Daily Living Tasks</option>
        <option>Assistance with Boarding and Deboarding</option>
        <option>Advocacy and Rights Awareness </option>
        <option>Emergency Preparedness </option>
        <option>Healthcare and Medical Assistance </option>
      </select>
    </form>
    <h2>Your request</h2>
    <table>
      <tr>
        <th>Requrest Id</th>
        <th>Request Type</th>
        <th> Scheduled Date</th>
        <th> Posted Date</th>
        <th>Destination if any</th>
      </tr>
      <tr>
        <td>123213214</td>
        <td>something something</td>
        <td>12/12/34</td>
        <td>12/12/34</td>
        <td>bmsce</td>
      </tr>
    </table>
    </>
  );
}
