import {
  FcHome,
  FcOvertime,
  FcAlarmClock,
  FcAssistant,
  FcSupport,
  FcUndo,
  FcOpenedFolder,
} from 'react-icons/fc'

export type MenuItem = {
  icon: JSX.Element
  label: string
  link: string
}
type Menu = { [key: string]: MenuItem }

export const MENU: Menu = {
  TOP: { icon: <FcHome />, label: 'マイページ', link: '/mypage' },
  SHIFT: { icon: <FcOvertime />, label: 'シフト', link: '/shift' },
  ATTENDANCE: { icon: <FcOpenedFolder />, label: '勤務記録', link: '/history' },
  TIMECARD: {
    icon: <FcAlarmClock />,
    label: 'タイムカード',
    link: '/timecard',
  },
  CONFIG: {
    icon: <FcSupport />,
    label: '設定',
    link: '/config',
  },
  HOWTO: {
    icon: <FcAssistant />,
    label: '使い方',
    link: '/help',
  },
  LOGOUT: {
    icon: <FcUndo />,
    label: 'ログアウト',
    link: '/logout',
  },
}
