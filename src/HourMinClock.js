/**
 * 
 * @returns Current, local time in 12-hour format (HH:MM)
 */

const Clock = () => {
  const now = new Date().toLocaleString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true
  });
  return (
    <div>
      <div>Current Time:</div>
      <h3>{now}</h3>
    </div>
  );
}

export default Clock;
