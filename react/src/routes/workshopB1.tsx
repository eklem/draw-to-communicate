import { Tldraw } from 'tldraw'
import TaskCheckbox from '../components.tsx'
import '../workshop.css'

export default function WorkshopB1() {
  return (
    <div>
      <div id="workshopagenda" style={{ position: 'fixed'}}>
        <h1>B1 - The visual alphabet</h1>
        <TaskCheckbox id="b1.1" value="b1"/>
        <div className="task">
          <h2 className="tasktitle">Using the visual alphabet</h2>
          <p className="task">Use the pencil <img alt='pen' style={{ width: 20 }} src={String('https://unpkg.com/@tldraw/assets@2.2.1/icons/icon/tool-pencil.svg')} /> in the bottom toolbar to draw the visual alphabet:</p>
          <ul>
            <li>dot, line, angle, arch, spiral, loop</li>
            <li>circle, lense, triangle, rectangle, pentagon/polygon, cloud</li>
          </ul>
          <p className="time">Time: 2 minutes</p>
        </div>
      </div>
      <div id="tldrawcontainer" style={{ position: 'fixed', inset: 0 }}>
        <Tldraw persistenceKey="workshopB1" />
      </div>
    </div>
  )
}