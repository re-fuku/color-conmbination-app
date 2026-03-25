# 設計図

```mermaid
graph TD
    Project[src]
    Project --> App[App.tsx : 司令塔]
    Project --> Constants[constants/]
    Project --> Comps[components/]

    Constants --> Config[layoutConfigs.ts : 設定データ]

    Comps --> Side[sidepanel/]
    Comps --> Prev[previews/]
    Comps --> PC[PreviewCanvas.tsx]

    Side --> LP[LayoutPanel.tsx]
    Side --> SP[SettingPanel.tsx]

    Prev --> LPrev[LinearPreview.tsx]
    Prev --> MPrev[MaskPreview.tsx]
    Prev --> PPrev[PatternPreview.tsx]