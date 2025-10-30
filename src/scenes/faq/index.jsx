import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions" />

      {/* 1️⃣  Maintenance Mode */}
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            How does Maintenance Mode work?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Maintenance Mode temporarily restricts player access while allowing
            admins to make updates or server changes. When enabled, users see a
            maintenance message and cannot perform any transactions or gameplay
            until it’s turned off. Admins can still log in via the admin panel
            to perform necessary maintenance tasks.
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* 2️⃣  Login / Authentication */}
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            How can users log in using Telegram or other social platforms?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Telegram login can be integrated using Telegram’s OAuth API. Once
            configured, players can log in directly with their Telegram account
            without creating a separate username or password. For security, a
            one-time verification token is used during each login session.
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* 3️⃣  Subscription / Points System */}
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            How does the subscription and point system work?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Players can subscribe to different plans—daily, weekly, or monthly—
            each providing a fixed number of points. Once the subscription
            expires, unused points automatically reset. You can configure these
            plans and pricing directly in the admin dashboard under the
            “Subscription Settings” tab.
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* 4️⃣  Game Providers */}
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            What are game providers and how can I add new ones?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Game providers are third-party casino game vendors such as Hacksaw
            Gaming, KA Gaming, or RubyPlay. You can add new providers via the
            admin panel under “Manage Providers.” Each provider entry should
            include an API key, endpoint URL, and a logo for display in the
            lobby.
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* 5️⃣  Reports / Analytics */}
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            How can I view game performance and revenue reports?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Go to the “Analytics” section in the dashboard to view daily, weekly,
            and monthly reports. You can filter data by provider, game type, or
            time period. Charts and metrics are updated in real-time to reflect
            player activity, wins, losses, and total revenue generated.
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* 6️⃣  Technical Support */}
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            How can I contact technical support?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            For technical issues, submit a ticket under the “Support” tab in the
            admin dashboard or contact our 24×7 support via email at
            <span style={{ color: colors.blueAccent[300], marginLeft: "4px" }}>
              support@casino-admin.io
            </span>.
            Make sure to include logs or screenshots if applicable for faster
            resolution.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;
