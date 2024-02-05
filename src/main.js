export default function healthStatus(unitlist) {
  return unitlist.sort((a, b) => b.health - a.health);
}
