(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{389:function(t,e,r){"use strict";r.r(e);var a=r(42),s=Object(a.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"flutter-使用经验"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#flutter-使用经验"}},[t._v("#")]),t._v(" Flutter 使用经验")]),t._v(" "),r("blockquote",[r("p",[t._v("自己mark一下")])]),t._v(" "),r("h2",{attrs:{id:"更改-flutter-桌面项目名"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#更改-flutter-桌面项目名"}},[t._v("#")]),t._v(" 更改 Flutter 桌面项目名")]),t._v(" "),r("ul",[r("li",[t._v("Android 是在 AndroidManifest.xml 中修改\n"),r("ul",[r("li",[t._v("flutter_ui\\android\\app\\src\\main\\AndroidManifest.xml")]),t._v(" "),r("li",[t._v("修改 "),r("code",[t._v('android:label="蘑菇碳"')])])])]),t._v(" "),r("li",[t._v("iOS 则是在 Info.plist 中修改的\n"),r("ul",[r("li",[t._v("flutter_ui\\ios\\Runner\\Info.plist")]),t._v(" "),r("li",[t._v("修改"),r("code",[t._v("<key>CFBundleName</key>")]),t._v("下面的"),r("code",[t._v("<string>蘑菇碳<string>")])])])])]),t._v(" "),r("h2",{attrs:{id:"更改-flutter-桌面项目图片"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#更改-flutter-桌面项目图片"}},[t._v("#")]),t._v(" 更改 Flutter 桌面项目图片")]),t._v(" "),r("ul",[r("li",[t._v("Android 在 flutter_ui\\android\\app\\src\\main\\res 下各种规格图片")]),t._v(" "),r("li",[t._v("ios 在 flutter_ui\\ios\\Runner\\Assets.xcassets\\AppIcon.appiconset 下配置")])]),t._v(" "),r("h2",{attrs:{id:"版本升级"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#版本升级"}},[t._v("#")]),t._v(" 版本升级")]),t._v(" "),r("p",[t._v("Flutter的版本升级通过"),r("code",[t._v("flutter_downloader")]),t._v("（包下载） + "),r("code",[t._v("permission_handler")]),t._v("（权限管理） + "),r("code",[t._v("path_provider")]),t._v("（下载路径管理）协助完成")]),t._v(" "),r("p",[t._v("PS: flutter_downloader 插件有毒，推使用 1.1.9版本。后面的版本有各种BUG（虽然功能也多了点）")]),t._v(" "),r("h2",{attrs:{id:"配置不同的运行环境"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#配置不同的运行环境"}},[t._v("#")]),t._v(" 配置不同的运行环境")]),t._v(" "),r("blockquote",[r("p",[t._v("区分开发、测试、生产环境")])]),t._v(" "),r("ul",[r("li",[t._v("运行："),r("code",[t._v("flutter run -target lib/main_dev.dart")]),t._v(" （"),r("code",[t._v("-target")]),t._v(" 可以缩小为 "),r("code",[t._v("-t")]),t._v("）")]),t._v(" "),r("li",[t._v("打包："),r("code",[t._v("flutter build apk -t lib/main_prod.dart")]),t._v(" （ios同理）")])]),t._v(" "),r("p",[t._v("当然"),r("code",[t._v(":)")]),t._v("如果通过编辑器/.bat来配置就更完美了。")]),t._v(" "),r("h2",{attrs:{id:"android-打包后不能访问网络问题"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#android-打包后不能访问网络问题"}},[t._v("#")]),t._v(" Android 打包后不能访问网络问题")]),t._v(" "),r("blockquote",[r("p",[t._v("需要配置：使用权限申请")])]),t._v(" "),r("p",[t._v("分别在"),r("code",[t._v("android/src/profile/AndroidManifest.xml")]),t._v("和"),r("code",[t._v("android/src/main/AndroidManifest.xml")]),t._v("添加配置")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v('    // <manifest>\n        <uses-permission android:name="android.permission.READ_PHONE_STATE" />\n        <uses-permission android:name="android.permission.INTERNET" />\n        <uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />\n        <uses-permission android:name="android.permission.ACCESS_WIFI_STATE" />\n    // </manifest>\n')])])]),r("p",[t._v("然后就能访问网络了")])])}),[],!1,null,null,null);e.default=s.exports}}]);