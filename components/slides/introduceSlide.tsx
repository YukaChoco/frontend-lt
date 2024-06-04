import { Box, Grid, Typography } from "@mui/material";

export default function IntroduceSlide() {
  return (
    <Box textAlign={"center"} >
      <h2>自己紹介</h2>

      {/* 左よせで配置 */}
      <Grid container gap={16} alignItems={"center"} justifyContent={"center"}>
        <Grid item textAlign={"left"} xs="auto">
          <Typography pt={4}>
            <span>名前:</span>
            <span style={{ marginLeft: "16px" }}>藤堂 ゆうか</span>
          </Typography>
          <Typography pt={4}>
            <span>所属:</span>
            <span style={{ marginLeft: "16px" }}>立命館大学 情報理工学部</span>
          </Typography>
          <Typography pt={4}>
            <span>回生:</span>
            <span style={{ marginLeft: "16px" }}>4回生</span>
          </Typography>
          <Typography pt={4}>
            <span>専攻:</span>
            <span style={{ marginLeft: "16px" }}>
              画像・音メディアコース(CG第1研究室)
            </span>
          </Typography>
          <Typography pt={4}>
            <span>趣味:</span>
            <span style={{ marginLeft: "16px" }}>
              ダンス、お菓子作り、歌、お絵描き、開発
            </span>
          </Typography>
          <Typography pt={4}>
            <span>技術:</span>
            <span style={{ marginLeft: "16px" }}>Webフロント・モバイル</span>
          </Typography>
        </Grid>

        <Grid item xs>
          <img
            src="/profile.jpg"
            width={360}
            height={360}
            alt="藤堂ゆうかのプロフィール画像"
          />
        </Grid>
      </Grid>
    </Box>
  );
}
